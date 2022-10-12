<template>
  <main id="app">
    <h1>Band Members</h1>

    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Instrument</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(member, index) in members" :key="index">
          <td>{{ member.fname }}</td>
          <td>{{ member.lname }}</td>
          <td>{{ member.instrument }}</td>
        </tr>
      </tbody>
    </table>

    <section class="add-more">
      <p>Add more band members</p>
      <form>
        <label for="fname">First name:</label><br />
        <input
          type="text"
          id="fname"
          name="fname"
          v-model="newMember.fname"
        /><br />

        <label for="lname">Last name:</label><br />
        <input
          type="text"
          id="lname"
          name="lname"
          v-model="newMember.lname"
        /><br />

        <label for="instrument">Instrument:</label><br />
        <select
          name="instrument"
          id="instrument"
          v-model="newMember.instrument"
        >
          <option value="Bass">Bass</option>
          <option value="Electric Guitar">Electric Guitar</option>
          <option value="Acoustic Guitar">Acoustic Guitar</option>
          <option value="Drums">Drums</option>
        </select>
        <br /><br />
        <input @click="addNewMember" type="button" value="Add" />
      </form>
    </section>
  </main>
</template>



<script>
import members_list from "./members.json";

export default {
  name: "form_app",
  data: function () {
    return {
      members: members_list,
      newMember: {},
    };
  },
  methods: {
    addNewMember() {
      if (
        this.newMember.fname &&
        this.newMember.lname &&
        this.newMember.instrument
      ) {
        this.members.push(this.newMember);
        this.newMember = {};
      } else {
        alert("all fields required");
      }
    },
  },
};
</script>



<style>
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

main {
  text-align: center;
  padding: 45px;
}

main table {
  margin: auto;
  font-size: 14px;
}

main td,
main th {
  padding: 8px;
  border-collapse: collapse;
}

main th {
  border-bottom: 1px solid lightgrey;
}

main p {
  margin-top: 0px;
}

main form input,
main form select {
  height: 24px;
  width: 240px;
  box-sizing: border-box;
}

main form label {
  font-size: 12px;
}

section.add-more {
  background-color: rgb(241, 241, 241);
  padding: 40px;
  margin-top: 40px;
}
</style>