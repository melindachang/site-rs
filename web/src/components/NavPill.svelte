<script lang="ts">
  let { show } = $props()
</script>

{#if show}
  <div class="nav__pill"><span>00.00%</span></div>
{/if}

<style lang="scss">
  @use '../styles/_variables';

  .nav__pill {
    margin-left: 1.2rem;
    padding: 1.25px 8px;
    border: 1.25px solid var(--clr-primary);
    border-radius: 40px;

    span {
      line-height: 100%;
    }
  }
</style>
