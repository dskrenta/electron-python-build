<main>
  <nav observable={observable}></nav>
  <tab observable={observable}></tab>
  <h1>Hello browser!</h1>

  <script>
    const self = this;
    this.observable = riot.observable();
  </script>
</main>
