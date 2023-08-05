<template>
    <h1>Details page</h1>
    <p>description here</p>
</template>

<script>
export default {
    name: "EventDetailsPage",
    props: {
        event: {}
    },
    data: () => ({
        title: "hello description",
    })
}
</script>