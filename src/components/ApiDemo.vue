<script setup lang="ts">
import { useFetch } from '@vueuse/core'

interface Hello {
  message: string
  time: string
}

const { data, error, isFetching, execute } = useFetch('/api/hello', {
  immediate: false,
}).get().json<Hello>()
</script>

<template>
  <button :disabled="isFetching" @click="execute()">
    {{ isFetching ? 'Calling...' : 'Call API' }}
  </button>
  <pre v-if="data">{{ data }}</pre>
  <p v-if="error" style="color: red">{{ error }}</p>
</template>