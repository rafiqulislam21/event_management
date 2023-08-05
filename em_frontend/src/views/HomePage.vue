<template>
    <v-layout class="rounded rounded-md">
        <v-main class="d-flex align-center justify-center" style="min-height: 300px">
            <v-container fluid>
                <v-row>
                    <v-col v-for="(item, index) in eventList" v-bind:key="index">
                        <event-card :item="item" />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script>

import EventCard from '../components/EventCard.vue';

export default {
    name: "HomePage",
    components: {
        EventCard
    },
    data: () => ({
        eventList: [
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
            {
                title: "Cuba",
                subtitle: "Salsa, merengue, y cumbia",
                prependAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
                src: "https://picsum.photos/512/128?random",
                description: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
            },
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
