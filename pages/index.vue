<template>
  <div class="bg-white text-4xl font-semibold text-black">
    <button class="mt-2" @click="addName">Add name</button>

    <ul>
      <li v-for="name in names.data.value?.names">
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { $client } = useNuxtApp();

const names = await $client.getNames.useQuery({});

const addName = () => {
  $client.addNames.mutate({
    name: "John Doe",
  });
};
</script>
