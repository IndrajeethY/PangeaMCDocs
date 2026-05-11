"use client";

import { useState } from "react";

const enchantments = [
  { name: "Cold Steel", category: "Armor", effect: "Applies Mining Fatigue to attackers" },
  { name: "Darkness Cloak", category: "Armor", effect: "Applies Darkness to attackers" },
  { name: "Dragon Heart", category: "Armor", effect: "Passive Health Boost effect" },
  { name: "Elemental Protection", category: "Armor", effect: "Reduces potion and elemental damage" },
  { name: "Fire Shield", category: "Armor", effect: "Ignites attackers when they hit you" },
  { name: "Flame Walker", category: "Armor", effect: "Walk on lava, immune to magma damage" },
  { name: "Hardened", category: "Armor", effect: "Grants Resistance on taking damage" },
  { name: "Ice Shield", category: "Armor", effect: "Freezes and slows attackers" },
  { name: "Jumping", category: "Armor", effect: "Grants Jump Boost" },
  { name: "Kamikadze", category: "Armor", effect: "Creates an explosion when you die" },
  { name: "Lightweight", category: "Armor", effect: "Walk safely on turtle eggs, farmland, and dripleaf" },
  { name: "Night Vision", category: "Armor", effect: "Grants Night Vision" },
  { name: "Rebound", category: "Armor", effect: "Landing effect like a Slime Block" },
  { name: "Regrowth", category: "Armor", effect: "Slowly restores hearts over time" },
  { name: "Saturation", category: "Armor", effect: "Slowly restores hunger over time" },
  { name: "Speed", category: "Armor", effect: "Grants Speed effect" },
  { name: "Stopping Force", category: "Armor", effect: "Reduces knockback when hit" },
  { name: "Water Breathing", category: "Armor", effect: "Grants Water Breathing" },
  { name: "Bane of Netherspawn", category: "Weapon", effect: "Bonus damage to nether mobs" },
  { name: "Blindness", category: "Weapon", effect: "Applies Blindness on hit" },
  { name: "Confusion", category: "Weapon", effect: "Applies Nausea on hit" },
  { name: "Cure", category: "Weapon", effect: "Cures Zombie Villagers and Zombified Piglins on kill" },
  { name: "Curse of Death", category: "Weapon", effect: "Chance of dying when you kill a player" },
  { name: "Cutter", category: "Weapon", effect: "Damages and drops target's armor pieces" },
  { name: "Decapitator", category: "Weapon", effect: "Chance to drop target's head" },
  { name: "Double Strike", category: "Weapon", effect: "Doubles your damage" },
  { name: "Exhaust", category: "Weapon", effect: "Applies Hunger on hit" },
  { name: "Ice Aspect", category: "Weapon", effect: "Freezes and slows target" },
  { name: "Infernus", category: "Weapon", effect: "Tridents set targets on fire" },
  { name: "Nimble", category: "Weapon", effect: "Mob drops go directly to your inventory" },
  { name: "Paralyze", category: "Weapon", effect: "Applies Mining Fatigue on hit" },
  { name: "Rage", category: "Weapon", effect: "Grants Strength during combat" },
  { name: "Rocket", category: "Weapon", effect: "Launches target into the air" },
  { name: "Swiper", category: "Weapon", effect: "Steals XP from players" },
  { name: "Temper", category: "Weapon", effect: "More damage the lower your health" },
  { name: "Thrifty", category: "Weapon", effect: "Mobs drop their Spawn Egg" },
  { name: "Thunder", category: "Weapon", effect: "Summons lightning with extra damage" },
  { name: "Vampire", category: "Weapon", effect: "Steals health from target" },
  { name: "Venom", category: "Weapon", effect: "Applies Poison on hit" },
  { name: "Village Defender", category: "Weapon", effect: "Bonus damage to Illagers" },
  { name: "Wisdom", category: "Weapon", effect: "More XP from mob kills" },
  { name: "Wither", category: "Weapon", effect: "Applies Wither on hit" },
  { name: "Bomber", category: "Bow", effect: "Shoots TNT instead of arrows" },
  { name: "Confusing Arrows", category: "Bow", effect: "Arrows apply Nausea" },
  { name: "Darkness Arrows", category: "Bow", effect: "Arrows apply Darkness" },
  { name: "Dragonfire Arrows", category: "Bow", effect: "Arrows apply Dragon's Breath" },
  { name: "Electrified Arrows", category: "Bow", effect: "Arrows summon lightning" },
  { name: "Ender Bow", category: "Bow", effect: "Shoots Ender Pearls instead of arrows" },
  { name: "Explosive Arrows", category: "Bow", effect: "Arrows explode on hit" },
  { name: "Flare", category: "Bow", effect: "Arrows place a torch where they land" },
  { name: "Ghast", category: "Bow", effect: "Shoots fireballs instead of arrows" },
  { name: "Hover", category: "Bow", effect: "Arrows apply Levitation" },
  { name: "Poisoned Arrows", category: "Bow", effect: "Arrows apply Poison" },
  { name: "Sniper", category: "Bow", effect: "Increases projectile speed" },
  { name: "Vampiric Arrows", category: "Bow", effect: "Arrows restore your health on hit" },
  { name: "Withered Arrows", category: "Bow", effect: "Arrows apply Wither" },
  { name: "Blast Mining", category: "Tool", effect: "Mine blocks with explosions" },
  { name: "Glass Breaker", category: "Tool", effect: "Break glass without shattering" },
  { name: "Haste", category: "Tool", effect: "Grants Haste while mining" },
  { name: "Lucky Miner", category: "Tool", effect: "More XP from mined blocks" },
  { name: "Replanter", category: "Tool", effect: "Auto-replants crops on harvest" },
  { name: "Silk Chest", category: "Tool", effect: "Chests drop with their contents inside" },
  { name: "Silk Spawner", category: "Tool", effect: "Chance to pick up monster spawners" },
  { name: "Smelter", category: "Tool", effect: "Auto-smelts mined ores" },
  { name: "Telekinesis", category: "Tool", effect: "All block drops go straight to your inventory" },
  { name: "Treefeller", category: "Tool", effect: "Chop down an entire tree in one hit" },
  { name: "Tunnel", category: "Tool", effect: "Mine in 1x2, 2x2, or 3x3 areas" },
  { name: "Veinminer", category: "Tool", effect: "Mine an entire ore vein at once" },
  { name: "Auto Reel", category: "Fishing", effect: "Automatically reels in when a fish bites" },
  { name: "Curse of Drowned", category: "Fishing", effect: "Chance to fish up a Drowned mob" },
  { name: "Double Catch", category: "Fishing", effect: "Doubles the amount of fish caught" },
  { name: "River Master", category: "Fishing", effect: "Increases casting distance" },
  { name: "Seasoned Angler", category: "Fishing", effect: "More XP from fishing" },
  { name: "Survivalist", category: "Fishing", effect: "Auto-cooks raw fish when caught" },
  { name: "Restore", category: "Universal", effect: "Saves your item from breaking once" },
  { name: "Soulbound", category: "Universal", effect: "Item stays with you on death" },
  { name: "Curse of Breaking", category: "Universal", effect: "Item loses durability faster" },
  { name: "Curse of Fragility", category: "Universal", effect: "Item can't be repaired at anvil or grindstone" },
  { name: "Curse of Mediocrity", category: "Universal", effect: "Removes enchantments from block/mob drops" },
  { name: "Curse of Misfortune", category: "Universal", effect: "Reduces drops to zero" },
];

const categories = ["All", "Armor", "Weapon", "Bow", "Tool", "Fishing", "Universal"];

const categoryColors: Record<string, string> = {
  Armor: "text-blue-400",
  Weapon: "text-red-400",
  Bow: "text-green-400",
  Tool: "text-yellow-400",
  Fishing: "text-cyan-400",
  Universal: "text-purple-400",
};

export function EnchantSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = enchantments.filter((e) => {
    const matchesQuery =
      query === "" ||
      e.name.toLowerCase().includes(query.toLowerCase()) ||
      e.effect.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || e.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="not-prose mb-8">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Search enchantments..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-lg border border-[hsl(25,8%,20%)] bg-[hsl(25,10%,10%)] px-4 py-2.5 text-sm text-[hsl(35,10%,88%)] placeholder-[hsl(30,6%,40%)] outline-none transition-colors focus:border-[hsl(40,80%,45%)]"
        />
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={category === cat ? { color: "#000" } : undefined}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                category === cat
                  ? "bg-[hsl(40,90%,48%)]"
                  : "border border-[hsl(25,8%,20%)] bg-[hsl(25,10%,10%)] text-[hsl(30,6%,55%)] hover:border-[hsl(40,80%,45%,0.3)] hover:text-[hsl(35,10%,80%)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-[hsl(30,6%,40%)] mb-3">
        {filtered.length} enchantment{filtered.length !== 1 ? "s" : ""} found
      </div>

      <div className="overflow-hidden rounded-lg border border-[hsl(25,8%,18%)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[hsl(25,8%,18%)] bg-[hsl(25,10%,9%)]">
              <th className="px-4 py-2.5 text-left text-xs font-medium text-[hsl(30,6%,50%)]">Enchantment</th>
              <th className="hidden px-4 py-2.5 text-left text-xs font-medium text-[hsl(30,6%,50%)] sm:table-cell">Category</th>
              <th className="px-4 py-2.5 text-left text-xs font-medium text-[hsl(30,6%,50%)]">Effect</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((e) => (
              <tr key={e.name} className="border-b border-[hsl(25,8%,14%)] last:border-0 hover:bg-[hsl(25,10%,10%)]">
                <td className="px-4 py-2 font-medium text-[hsl(35,10%,88%)]">{e.name}</td>
                <td className={`hidden px-4 py-2 sm:table-cell ${categoryColors[e.category]}`}>{e.category}</td>
                <td className="px-4 py-2 text-[hsl(30,6%,50%)]">{e.effect}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-[hsl(30,6%,40%)]">
                  No enchantments found matching &ldquo;{query}&rdquo;
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
