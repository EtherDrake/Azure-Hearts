import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const chars = [
      { name: 'Ashkii', player: 'DocArtemis', link: 'https://www.myth-weavers.com/sheet.html#id=1665359' },

      { name: 'Thurm Gidlenhall', player: 'Cheese', link: 'https://www.myth-weavers.com/sheet.html#id=1666170' },

      { name: 'Kai Quintana', player: 'Stressful Courtier', link: 'https://www.myth-weavers.com/sheet.html#id=1666111' },

      { name: 'Elmyra Fireshaker', player: 'Ramia', link: 'https://www.myth-weavers.com/sheet.html#id=1666369' },

      { name: 'Ardathair', player: 'Ardathair', link: 'https://www.myth-weavers.com/sheet.html#id=1679133' },

      { name: 'Suriel', player: 'Aion', link: 'https://www.myth-weavers.com/sheet.html#id=1674985' },

      { name: 'Gadmuffin Garglesnickett', player: 'Muffer', link: 'https://www.myth-weavers.com/sheet.html#id=1678725' },

      { name: 'Godrik Stronghold', player: 'C_WolF', link: 'https://www.myth-weavers.com/sheet.html#id=1678133' },

      { name: 'Yvonne Godeviir', player: 'Jill', link: 'https://www.myth-weavers.com/sheet.html#id=1681501' },

      { name: 'Karius de Lore', player: 'Karius', link: 'https://www.dndbeyond.com/characters/4901595/r99Uoj' },

      { name: 'Aeko Greenbarks', player: 'SquirrelWizard', link: 'https://www.myth-weavers.com/sheet.html#id=1685998' },

      { name: 'Casimira', player: 'Orannis', link: 'https://www.myth-weavers.com/sheet.html#id=1687262' },

      { name: 'Maralyne Fargoes', player: 'Elijnis', link: 'https://www.dndbeyond.com/characters/4903707/SLsrME' },

      { name: 'Lisa', player: 'steelgallanthardenpeak', link: 'https://www.dndbeyond.com/characters/5037633/bqBCL0' },

      { name: 'Eruanna Neryamyr', player: 'NightArcher', link: 'https://www.myth-weavers.com/sheet.html#id=1687488' },

      { name: 'Lily Rath', player: 'SquirrelWizard', link: 'https://www.myth-weavers.com/sheet.html#id=1688776' },

    ];
    return {chars};
  }
}