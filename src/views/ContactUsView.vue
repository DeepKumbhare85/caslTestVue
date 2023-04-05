<script setup lang="ts">
import { useAbility } from '@casl/vue';
const { can } = useAbility();


</script>
<template>
    <div v-if="can('read', 'Contact')">
        <h1>This is contact us page</h1>
    </div>
    <div v-else>
        <h1>Sorry, You are not allowed to see this page</h1>
    </div>
</template>
