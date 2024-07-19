import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

// Sample data for users
const users = [
  { id: '1', name: 'Jenny Alxinder', status: 'Active now', image: 'https://s3-alpha-sig.figma.com/img/ed3f/e563/7484dd2d4beece520bcd36e7bf4282b8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U1ITM-386qkPjPRtE5Re5oYKPvr5Kf60TtUzgSXmT3xiUowMM6LjyKxEGoIFentT8pWD4b3q5F50~bRVtYeFu3EgPvMVk8JYLkx3HBqfyS8vpffKgbhPnVhPsU6DENirkJ~tKxAMezXtQZ3eall5DtT7m2AXdyIy83PJF5q68Horpmk4XhRuVngiFnGjXLbf9RjBdJAXU-vIksJM6Dv1XStjbrQ5xmi6QTskegy7ie0fd3XudY~YBQovQYjf~LxY1WNrzkwNZHbt6cSSeMsiCGYZhiI08E~TwKOW9Ltrfz4k63DOSgsiRtE3Lu9-3jcQZC9FgjKDBkfFNhQaSSYuUg__' },
  // { id: '2', name: 'Team Align', status: 'Active 1h ago', image: 'https://path/to/team-align-image.png' },
  { id: '3', name: 'Alex Avishek', status: 'Active 1h ago', image: 'https://s3-alpha-sig.figma.com/img/e07b/b72d/c130d596724f96243c64d44feb9f0b30?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kaB1bsO5E9lTm4UoOgCG8ajqusXrwKqAUFi~Q8Ks20BbQW0~oqj4J~hWTMIjGIhUPRHeDI6OA~IPhyKxpEvk4JDLYEeUHQwwalV2ROUfZl3foPVLLIsjN1GgzqBht6n5OQZBY9bXG1lDE~ipi-G1UF72Zw9oV2bCWsFU-NzxRiKaoFMs37FbbSSwtZBNKXt6km-MTjREpOM8wb0DqGDJ-mrG-fn2v6bNxYKdjbgP7N0fiBgbrmXPrwubxa~whiOzFke5BmocUeKkNqKMCZ44eGeORQrqkD9VxFbyGO~CcqdLw5GOqSKIt7cpE1D9hKyE7aXSzx3UVksDjdVwv54UfQ__' },
  { id: '4', name: 'Jafor Dicrose', status: 'Active 1h ago', image: 'https://s3-alpha-sig.figma.com/img/b6d6/8310/b8810198830e49724acabd934dd2a999?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J373MHNEXtj0QgOmYMmmTkePpKwfhSLntpSSJEiShNbMgQgII1WmiT5izsV~9Fhurzd~e0mU-G4IQoe8~clXMf8TCOPn7eizek8jSr11S6tYqMx7LQ6~JwX5ix7G2ZDC80AmKXylGZhC8gdhtnhMFqtf8pkLIQnjjwvlIDbCHX01Dee4gDrhRAdFH3gUS2OqUCVKi6S9TcewDjasUq2XNSN4hGvMv93Uw38-hO8DldukMYtM3vO5~CvDHB-Z2GCfdlf9zPgMBYrXtLXC0O3ij4RQxiKgj52rc~zGcRWknUw1-QLXjvnje9moWN2kjSeVE1827NsqrebGEIXcqv6L4g__' },
];

const Massage = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Image source={{ uri: item.image }} style={styles.userImage} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userStatus}>{item.status}</Text>
      </View>
      <Image source={{ uri: 'https://path/to/camera-icon.png' }} style={styles.cameraIcon} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" type="ionicon" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Projects</Text>
        <TouchableOpacity>
          <Icon name="add" type="ionicon" size={24} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    marginTop: 16,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    color:"black",
    fontWeight: 'bold',
  },
  userStatus: {
    color: 'gray',
  },
  cameraIcon: {
    color:"black",
    width: 24,
    height: 24,
  },
});

export default Massage;
