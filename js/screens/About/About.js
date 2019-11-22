// import AboutContainer from './AboutContainer';
import React from 'react';
import {ScrollView, Text, View, Image, FlatList} from 'react-native';
import styles from './styles';
import AboutContainer from './AboutContainer';
import {Query} from 'react-apollo';
import Conducts from '../../components/Conducts';

const About = ({data}) => {
  return (
    <ScrollView style={styles.default}>
      <View style={styles.aboutPageImageContainer}>
        <Image
          style={styles.aboutPageImage}
          source={require('../../assets/images/r10_logo.png')}
        />
      </View>
      <View>
        <Text style={styles.text}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
      </View>

      <View>
        <Text style={styles.aboutTitle}>Date & Venue</Text>
        <Text style={styles.text}>
          The R10 Conference will take place on Saturday, January 31, 2021 in
          Vancouver,BC.
        </Text>
      </View>

      <View>
        <Text style={styles.aboutTitle}>Code of Conduct</Text>
      </View>

      <View>
        {data.allConducts.map(element => (
          <View key={element.id}>
            <Conducts title={element.title} description={element.description} />
          </View>
        ))}
      </View>

      <Text style={styles.aboutFooter}>&#9400; RED Academy 2019</Text>
    </ScrollView>
  );
};

export default About;
