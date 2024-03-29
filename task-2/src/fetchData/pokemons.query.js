import { gql } from "apollo-boost";
export const getPokemonsQuery = gql`
  query {
    pokemons(first: 50) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      types
      attacks {
        special {
          name
          type
          damage
        }
      }
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
    }
  }
`;
