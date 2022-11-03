<template>
  <div class="hello">
    <h3>Filters</h3>
    <ul style="display: inline-block; padding: 0">
      <li v-for="name in names" :key="name">
        {{ $filters.mayus(name) }}
      </li><br/>
      <li v-for="number in numbers" :key="number">
        {{ "Number: " + number + " --- " + $filters.getDoubleNumber(number) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FiltersComponent',
  data() {
    return {
      names: ["James", "Stockton", "Jordan", "Kobe", "Magic"],
      numbers: [4,6,8,11]
    }
  },
  methods: {
  },
}
</script>
