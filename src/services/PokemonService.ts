import { PokemonRepository } from '../repositories/PokemonRepository';
import { Pokemon } from '../models/Pokemon';

export class PokemonService {

    constructor(private pokemonRepository: PokemonRepository) {}

    getAverageLevel(): number {
        const pokemonList = this.pokemonRepository.getPokemonList();
        if (pokemonList.length === 0) {
            return 0;
        }
        const totalLevel = pokemonList.reduce(
            (sum, pokemon) => sum + pokemon.level,
            0
        );
        return totalLevel / pokemonList.length;
        }

    getFastestPokemon(): Pokemon | null {
        const pokemonList = this.pokemonRepository.getPokemonList();
        if (pokemonList.length === 0) {
            return null;
        }
        const fastestPokemon = pokemonList.reduce(
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