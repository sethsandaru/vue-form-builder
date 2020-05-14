<template>
    <div :class="containerClass">

    </div>
</template>

<script>
    import {STYLES} from "@/configs/styles";

    export default {
        name: "FormBuilder",
        data: () => ({

        }),
        computed: {
            containerClass() {
                return STYLES.CONTAINER.FLUID
            }
        }
    }
</script>

<style scoped>

</style>