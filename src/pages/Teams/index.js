import {Button, Icon} from 'react-native-elements';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import ButtonLarge from '@components/buttonLarge';
import {Colors} from '@common';
import MyTeam from '@components/c_teams/MyTeam';
import styles from './styles/Teams';
import team from '@models/team';
import {useSelector} from 'react-redux';

const index = (props) => {
  const [lista, setlista] = useState();
  // const isAuth = useSelector((state) => state.auth.token);
  // const user = useSelector((state) => state.auth.userId);
  useEffect(() => {
    getTeams();
  }, []);

  const recargar = () => {
    setTimeout(() => {
      getTeams();
    }, 15000);
  };

  const propsNavigate = (props, index, item, child) => {
    props.navigation.navigate('NewTeam', {
      flag: false,
      key: item.item.id,
      update: true,
      team: item.item.team,
      url: item.item.region,
      contador: index,
      pokemon1: item.item.pokemon1,
      pokemon2: item.item.pokemon2,
      pokemon3: item.item.pokemon3,
      pokemon4: item.item.pokemon4,
      child,
    });
  };

  const deleteTeam = async (key) => {
    try {
      const regions = await fetch(
        `https://pokelanin-default-rtdb.firebaseio.com/teams/${key}.json`,
        {
          method: 'DELETE',
        },
      );
      getTeams();
    } catch (e) {
      console.log(e);
    }
  };
  const getTeams = async () => {
    try {
      const teams = await fetch(
        `https://pokelanin-default-rtdb.firebaseio.com/teams.json`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const resData = await teams.json();
      const comprobar = [];
      for (const key in resData) {
        comprobar.push(
          new team(
            key,
            resData[key].pokemon1,
            resData[key].pokemon2,
            resData[key].pokemon3,
            resData[key].pokemon4,
            resData[key].pokemon5,
            resData[key].pokemon6,
            resData[key].team,
            resData[key].region,
          ),
        );
      }
      setlista(comprobar);
      recargar();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={styles.mainTitle}>MY TEAMS</Text>
      <FlatList
        style={styles.flatListStyle}
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={(item, i) => (
          <View style={styles.viewFlat}>
            <Text style={[styles.teamTitle, {...styles.data}]}>
              {item.item.team}
            </Text>
            <View style={styles.viewWrap}>
              {item.item.pokemon1 && <MyTeam pokeName={item.item.pokemon1} />}
              {item.item.pokemon2 && <MyTeam pokeName={item.item.pokemon2} />}
              {item.item.pokemon3 && <MyTeam pokeName={item.item.pokemon3} />}
              {item.item.pokemon4 && <MyTeam pokeName={item.item.pokemon4} />}
              {item.item.pokemon5 && <MyTeam pokeName={item.item.pokemon5} />}
              {item.item.pokemon6 && <MyTeam pokeName={item.item.pokemon6} />}
            </View>
            <ButtonLarge
              iconName="update"
              title="  Update Team"
              onPress={() => {
                if (item.item.pokemon4 === undefined) {
                  propsNavigate(props, 4, item);
                } else if (item.item.pokemon5 === undefined) {
                  propsNavigate(props, 5, item, {pokemon4: item.item.pokemon4});
                } else if (item.item.pokemon6 === undefined) {
                  propsNavigate(props, 6, item, {
                    pokemon4: item.item.pokemon4,
                    pokemon5: item.item.pokemon5,
                  });
                } else if (item.item.pokemon6) {
                  propsNavigate(props, 7, item, {
                    pokemon4: item.item.pokemon4,
                    pokemon5: item.item.pokemon5,
                    pokemon6: item.item.pokemon6,
                  });
                }
              }}
            />
            <ButtonLarge
              iconName="delete"
              title="  Delete Team"
              onPress={() => {
                console.log(item.item.id);
                deleteTeam(item.item.id);
              }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default index;
