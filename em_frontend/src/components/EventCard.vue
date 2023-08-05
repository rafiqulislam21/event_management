<template>
    <v-card border class="mb-2" density="compact" :prepend-avatar="item.avatar" :subtitle="item.subtitle"
        :title="item.title" variant="text">
        <v-img :src="item.src" height="128" cover></v-img>
        <v-card-text>
            {{ item.description }}
        </v-card-text>
        <template v-slot:actions>
            <router-link :to="'/events/'+item.title">
            <v-btn color="primary" variant="text">View More</v-btn></router-link>
            <v-btn color="primary" variant="text">See in Map</v-btn>
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