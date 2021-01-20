<template>
    <div class="container mx-auto md:my-44">
        <h1 class="font-sans">Test Tailwind.css</h1>
    </div>
    <div class="container mx-auto md:my-44">
        <h1 class="font-sans">Another Test</h1>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    components: {}
})
export default class Home extends Vue {}
</script>