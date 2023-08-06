<template>
    <v-container>
        <v-img :src="event.src" height="200" cover></v-img>
        <h2>{{ event.title }}</h2>
        <p>
            {{ event.description }}
        </p>
        <h6 class="text-disabled"><v-icon icon="mdi-map-marker" />Vienna, Austria</h6>
        <h6 class="text-disabled"><v-icon icon="mdi-seat-passenger" />15/200 | 20<v-icon icon="mdi-currency-eur" /></h6>
        <v-rating v-model="rating" class="ma-2" density="compact"></v-rating>


    </v-container>
</template>

<script>
export default {
    name: "EventDetailsPage",
    mounted() {
        this.id = this.$route.params.id;
        console.log(this.$route.params.id); // Accessing $route here should work without errors
    },
    data: () => ({
        id: null,
        rating: 4,
        event: {
            title: "Cuba",
            subtitle: "Salsa, merengue, y cumbia",
            prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
            src: "https://picsum.photos/512/128?random",
            description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
        },
    })
}
</script>