<template>
  <div>
    <h2 v-if="!user">Créer un nouvel utilisateur</h2>
    <form @submit.prevent="sendForm" class="container">
      <p>
        <label for="codeName">
          Quadri :
        </label>
        <input
          id="codeName"
          v-model="internalUser.codeName"
          type="text"
          name="codeName"
        />
      </p>
      <p>
        <label for="fullName">
          nom / prénom :
        </label>
        <input
          id="fullName"
          v-model="internalUser.fullName"
          type="text"
          name="fullName"
        />
      </p>
      <p>
        <label for="status">
          Statut :
        </label>
        <input
          id="status"
          v-model="internalUser.status"
          type="text"
          name="status"
        />
      </p>
      <p>
        <label for="avatar">
          avatar :
        </label>
        <input
          id="avatar"
          v-model="internalUser.avatar"
          type="text"
          name="avatar"
        />
      </p>
      <GenericButton
        v-if="!user"
        type="submit"
        label="envoyer"
        class="send-button"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { User } from "../types";
import { computed, reactive, defineComponent } from "@vue/composition-api";
import { PropType } from "vue";
import GenericButton from "./GenericButton.vue";

const EMPTY_USER = {
  codeName: "",
  fullName: "",
  status: "",
  avatar: ""
};

export default defineComponent({
  components: {
    GenericButton
  },
  props: {
    user: Object as () => PropType<User>
  },
  setup(props: { user: User }, { emit }) {
    const newUser = reactive(EMPTY_USER);

    const internalUser = computed(() => {
      return props.user || newUser;
    });

    const sendForm = () => {
      console.log("sendForm : ", internalUser);
      emit("createUser", internalUser);
    };
    return { internalUser, sendForm };
  }
});
</script>

<style scoped>
.container {
  padding: 1em;
  text-align: left;
}
p {
  display: flex;
  flex-flow: row wrap;
  text-align: left;
}
label {
  display: block;
  flex-basis: 200px;
}
input {
  flex-basis: auto;
  flex-grow: 1;
  padding: 1em;
}
.send-button {
  min-width: 200px;
  width: 100%;
}
</style>
