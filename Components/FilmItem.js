// Components/FilmItem.js

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import { getImageFromApi } from "../API/TMDBApi";
import FadeIn from "../Animations/FadeIn";

class FilmItem extends React.Component {
  _displayFavoriteImage(isFilmFavorite) {
    if (this.props.isFilmFavorite) {
      sourceImage = require("../Images/ic_favorite.png");
      return <Image source={sourceImage} style={styles.favorite_image} />;
    }
  }

  render() {
    const { film, displayDetailForFilm, isFilmFavorite } = this.props;
    return (
      <FadeIn>
        <TouchableOpacity
          onPress={() => displayDetailForFilm(film.id)}
          style={styles.main_container}
        >
          <Image
            style={styles.image}
            source={{ uri: getImageFromApi(film.poster_path) }}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              {this._displayFavoriteImage(isFilmFavorite)}
              <Text style={styles.title_text}>{film.title}</Text>
              <Text style={styles.vote_text}>{film.vote_average}</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text} numberOfLines={6}>
                {film.overview}
              </Text>
            </View>
            <View style={styles.released_container}>
              <Text style={styles.released_text}>{film.release_date}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </FadeIn>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: "row",
  },
  image: {
    height: 180,
    width: 120,
    backgroundColor: "grey",
    margin: 5,
  },
  content_container: {
    margin: 5,
    flex: 1,
  },
  header_container: {
    flexDirection: "row",
    flex: 3,
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5,
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#666666",
  },
  description_container: {
    flex: 7,
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
  },
  released_container: {
    flex: 1,
  },
  released_text: {
    textAlign: "right",
    fontSize: 14,
  },
  favorite_image: {
    width: 20,
    height: 20,
  },
});

export default FilmItem;
