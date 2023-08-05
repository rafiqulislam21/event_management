<template>
    <v-layout class="rounded rounded-md">

        <v-main class="d-flex align-center justify-center" style="min-height: 300px">
            <v-container fluid>
                <v-row>
                    <v-col v-for="(item, index) in eventList" v-bind:key="index">

                        <v-card border class="mb-2" density="compact" :prepend-avatar="item.avatar"
                            :subtitle="item.subtitle" :title="item.title" variant="text">
                            <v-img :src="item.src" height="128" cover></v-img>
                            <v-card-text>
                                {{ item.description }}
                            </v-card-text>
                            <template v-slot:actions>
                                <v-btn color="primary" variant="text">View More</v-btn>
                                <v-btn color="primary" variant="text">See in Map</v-btn>
                            </template>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-layout>
</template>

<script>
export default {
    name: "BookmarkPage",
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
            }
        ]
    }),
};
</script>
