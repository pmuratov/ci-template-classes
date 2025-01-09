import {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Undead,
  Zombie,
  Daemon,
} from "../charClasses";

test.each([
  ["tooLongName", "Bowman"],
  ["s", "Bowman"],
  [132, "Bowman"],
])("Name (>2 && <10), string.", (name, type) => {
  expect(() => {
    new Character(name, type);
  }).toThrow();
});

test("only allowed char type is created", () => {
  expect(() => {
    new Character("ValidName", "Dragonborn");
  }).toThrow();
});

test("leveling up 0hp", () => {
  let char = new Bowman("ValidName", "Bowman");
  char.damage(200);
  expect(() => {
    char.levelUp();
  }).toThrow();
});

test("leveling up, level+1, attack and defence +20%, health 100", () => {
  let char = new Bowman("ValidName", "Bowman");
  char.levelUp();
  expect(char).toEqual({
    name: "ValidName",
    type: "Bowman",
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test("taking 25 damage to 25 def, should be 81.25", () => {
  let char = new Bowman("ValidName", "Bowman");
  char.damage(25);
  expect(char.health).toEqual(81.25);
});

test("taking damage to 0 hp, should stay 0", () => {
  let char = new Bowman("ValidName", "Bowman");
  char.health = 0;
  char.damage(25);
  expect(char.health).toEqual(0);
});

test("Bowman created should have AttackDefence 25/25", () => {
  expect(new Bowman("ValidName", "Bowman")).toEqual({
    name: "ValidName",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test("Swordsman created should have AttackDefence 40/10", () => {
  expect(new Swordsman("ValidName", "Swordsman")).toEqual({
    name: "ValidName",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test("Magician created should have AttackDefence 10/40", () => {
  expect(new Magician("ValidName", "Magician")).toEqual({
    name: "ValidName",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("Undead created should have AttackDefence 25/25", () => {
  expect(new Undead("ValidName", "Undead")).toEqual({
    name: "ValidName",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test("Zombie created should have AttackDefence 40/10", () => {
  expect(new Zombie("ValidName", "Zombie")).toEqual({
    name: "ValidName",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test("Daemon created should have AttackDefence 10/40", () => {
  expect(new Daemon("ValidName", "Daemon")).toEqual({
    name: "ValidName",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
