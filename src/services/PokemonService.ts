import { Pokemon } from '../models/Pokemon';

export class PokemonService {
    private pokemonList: Pokemon[] = [];

    addPokemon(pokemon: Pokemon) {
        console.log(`Adding pokemon: ${pokemon.name}`);
        this.pokemonList.push(pokemon);
    }

    getAverageLevel(): number {
        if (this.pokemonList.length === 0) {
            return 0;
        }
        const totalLevel = this.pokemonList.reduce(
            (sum, pokemon) => sum + pokemon.level,
            0
        );
        return totalLevel / this.pokemonList.length;
    }

    getFastestPokemon(): Pokemon | null {
        if (this.pokemonList.length === 0) {
            return null;
        }
        const fastestPokemon = this.pokemonList.reduce(
            (currentFastest, pokemon) => {
                if (pokemon.stats.speed > currentFastest.stats.speed) {
                    return pokemon;
                }
                return currentFastest;
            }
        );

        return fastestPokemon;
    }
}
