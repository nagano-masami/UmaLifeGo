<template>

    <v-chip-group
    active-class="grey darken-3--text text--accent-4"
    multiple
    >
        <v-chip
            v-for="size in sizes"
            :key="size"
            :value="size"
            style="color: var(--main-color); background-color: var(--back-color);"
        >
            {{ size }}
        </v-chip>
    </v-chip-group>
</template>

<script>
export default {
  data () {
    return {
      sizes: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18']
    }
  },
}
</script>
