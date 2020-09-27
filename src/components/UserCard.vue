<template>
  <div>
    <div class="user-card">
      <div class="user-card__avatar" :style="imgCssVar"></div>
      <div class="user-card__infos">
        <h2>{{ user.codeName }}</h2>
        <h4>{{ fullNameWithCarSuffix }}</h4>
        <p>{{ user.status }}</p>
        <GenericButton
          @click="editing = !editing"
          :label="editing ? 'Fermer' : 'Editer'"
        />
      </div>
      <UserForm class="user-card__form" v-if="editing" :user="user" />
      <!-- template can not be type safe :( -->
    </div>
    <p class="user-card__tech-info">{{ computedOfComputed }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "@vue/composition-api";
import GenericButton from "./GenericButton.vue";
import UserForm from "./UserForm.vue";
import { User } from "../types";
import { PropType } from "vue";

const DEFAULT_IMG = "https://source.unsplash.com/1600x900/?nature,flower";

export default defineComponent({
  props: {
    user: Object as () => PropType<User>
  },
  components: {
    GenericButton,
    UserForm
  },
  setup({ user }: { user: User }) {
    const editing = ref(false);

    const fullNameWithCarSuffix = computed(() => {
      return user?.fullName + " 🚔";
    });
    const imgCssVar = computed(() => ({
      "--img-path": `url(${user.avatar || DEFAULT_IMG})`
    }));
    const computedOfComputed = computed(() => {
      return `The --img-path css variable for ${user.codeName} picture is ${imgCssVar.value["--img-path"]}`;
    });

    return {
      editing,
      imgCssVar,
      fullNameWithCarSuffix,
      computedOfComputed
    };
  }
});
</script>

<style>
.user-card {
  display: flex;
  flex-direction: row;
  padding: 1em;
}
.user-card__avatar {
  min-width: 12em;
  background-image: var(--img-path);
  background-size: cover;
  border-radius: 50%;
  height: 12em;
}
.user-card__infos {
  text-align: left;
  margin-left: 1em;
}
.user-card__form {
  flex-grow: 1;
}
.user-card__tech-info {
  font-style: italic;
  font-size: 0.8em;
  color: "#FFAAAA";
}
</style>
