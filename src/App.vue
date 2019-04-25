<template>
  <div class="cv-container">
    <header class="cv-header">
      <div style="flex: 1;">
        <img v-if="cv.image" class="cv-image" :src="cv.image" alt />
        <h1 class="cv-name">{{ cv.name }}</h1>
        <h2 v-if="cv.heading" class="cv-title">{{ cv.heading }}</h2>
      </div>
      <table class="cv-contact">
        <tr v-for="(c, i) in cv.contact" :key="i">
          <td>
            <div v-for="(line, i) in c.value" v-html="line" :key="i"></div>
          </td>
          <td>
            <i :class="c.iconClasses"></i>
          </td>
        </tr>
      </table>
    </header>
    <main>
      <section v-for="(s, i) in cv.sections" :key="i">
        <table>
          <thead>
            <tr>
              <th>
                <div
                  class="cv-table-line"
                  :style="{ backgroundColor: cv.themeColor }"
                ></div>
              </th>
              <th>{{ s.title }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(entry, i) in s.entries" :key="i">
              <td v-html="entry[0]"></td>
              <td>
                <p
                  v-for="(p, i) in entry[1]"
                  :class="{ 'cv-row-sub': i > 0 }"
                  v-html="p"
                  :key="i"
                ></p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script>
import data from "../data.yaml";

export default {
  data() {
    return {
      cv: data
    };
  }
};
</script>

<style src="../node_modules/minireset.css/minireset.min.css"></style>
<style scoped>
/* TODO: make fonts configurable in yaml file */
@import url("https://fonts.googleapis.com/css?family=Barlow|Qwigley|Playfair+Display+SC|Cormorant+Garamond");

.cv-container {
  font-size: 12pt;
  font-family: "Barlow";
  color: #2b2b2b;
}

/* TODO support formats other than A4 */
@page {
  width: 210mm;
  height: 297mm;
  margin: 25mm;
}

@media screen {
  .cv-container {
    width: 210mm;
    padding: 25mm;
    margin: 10px auto;
    min-height: calc(100vh - 20px);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);
  }
}

.cv-header {
  display: flex;
  align-items: center;
}

.cv-image {
  height: 30mm;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 2mm;
}

.cv-name {
  font-family: "Qwigley";
  font-size: 3rem;
  font-weight: normal;
}

.cv-title {
  font-family: "Playfair Display SC";
  font-size: 1.25rem;
  color: #8a8a8a;
}

.cv-contact {
  color: #5a5a5a;
  font-size: 0.85rem;
}

.cv-contact td {
  padding: 0.25rem 0.5rem;
  text-align: center;
}

.cv-contact td:first-of-type {
  text-align: right;
}

.cv-contact tr {
  border-bottom: 1px solid #8a8a8a;
}

.cv-contact tr:last-of-type {
  border-bottom: none;
}

main section {
  margin-top: 5mm;
}

main section:first-of-type {
  margin-top: 10mm;
}

main th {
  font-size: 1.5rem;
  font-family: "Cormorant Garamond";
}

main th:first-of-type {
  width: 30mm;
}

main td {
  padding: 0.25rem 0.5rem;
  vertical-align: top;
}

main td:first-of-type {
  text-align: right;
}

.cv-table-line {
  height: 1.25mm;
  width: 90%;
}

.cv-row-sub {
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

@media print {
  body {
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }

  tr {
    page-break-inside: avoid;
  }
}
</style>
