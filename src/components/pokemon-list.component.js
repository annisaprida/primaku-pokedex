import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrievePokemons,
  retrievePokemonDetail
} from "../actions/pokemons";
import "./style/pokemon-list.component.css"
class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.setActiveArticle = this.setActiveArticle.bind(this);

    this.state = {
      currentArticle: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.props.retrievePokemons();
    // this.props.retrievePokemonDetail();
  }

  setActiveArticle(article, index) {
    this.setState({
      currentArticle: article,
      currentIndex: index,
    });
  }

  render() {
    const { currentIndex } = this.state;
    const { pokemons } = this.props;

    return (
      <div className="list row">
        <div className="col-md-12">
          <h4>Pokemon List</h4>

          <ul>
            {pokemons &&
              pokemons.map((pokemon, index) => (
                <li
                  className={
                    "mb-3 list-group-item" +
                    (index === currentIndex ? "active" : "")
                  }

                  key={index}
                >
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}>
                  </img>
                  {pokemon.name}

                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons,
  };
};

export default connect(mapStateToProps, {
  retrievePokemons
})(PokemonList);
