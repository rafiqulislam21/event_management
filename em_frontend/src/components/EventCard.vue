<template>
    <v-card border class="mb-2" density="compact" :prepend-avatar="item.avatar" :subtitle="item.subtitle"
        :title="item.title" variant="text">
        <v-img :src="item.src" height="128" cover></v-img>
        <v-card-text>
            {{ item.description }}
            </v-card-text>
            <h6 class="text-disabled"><v-icon icon="mdi-map-marker" />Vienna, Austria</h6>
            <h6 class="text-disabled"><v-icon icon="mdi-seat-passenger" />15/200 | 20<v-icon icon="mdi-currency-eur" /></h6>
            <v-rating v-model="rating" class="ma-2" density="compact"></v-rating>
        
            <template v-slot:actions>
            <router-link :to="'/events/' + item.title">
                <v-btn color="primary" variant="text">View More</v-btn></router-link>
            <v-btn color="error" variant="icon"><v-icon icon="mdi-heart-outline" /></v-btn>
        </template>
    </v-card>
</template>

<script>

export default {
    name: "EventCard",
    props: {
        item: {}
    },
    data: () => ({
        rating: 3.5,
        eventList: [
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            }
        ]
    }),
};
</script>