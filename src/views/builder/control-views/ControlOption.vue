<template>
    <div class="control-option-container">

        <div class="option-control drag-item" title="Re-position / Drag">
            <span v-html="$form.getIcon('navigationMore', '24px', '24px', '#f1c40f')"></span>
        </div>

        <div class="option-control" title="Control Configuration">
            <span v-html="$form.getIcon('cog', '24px', '24px', '#3498db')"></span>
        </div>

        <div class="option-control" title="Delete Control">
            <span v-html="$form.getIcon('trash', '24px', '24px', '#e74c3c')"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ControlOption"
    }
</script>