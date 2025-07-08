<script lang="ts">
  import { onMount } from 'svelte'

  let { show } = $props()

  let scrollY = $state(0),
    scrollHeight = $state(1),
    innerHeight = $state(0)

  let pct = $derived(
      Math.min((scrollY / (scrollHeight - innerHeight)) * 100, 100),
    ),
    fmt = $derived(pct.toFixed(2).padStart(pct < 100 ? 5 : 6, '0'))

  onMount(() => {
    scrollHeight = document.body.scrollHeight
  })
</script>

<svelte:window bind:scrollY bind:innerHeight />

{#if show}
  <div class="nav__pill">
    <span>{fmt}%</span>
    <div
      class="nav__pill__progress"
      style={`transform: translateX(-${100 - pct}%)`}>
    </div>
  </div>
{/if}

<style lang="scss">
  @use '../styles/_variables';

  .nav__pill {
    margin-left: 1.2rem;
    padding: 1.25px 8px;
    border: 1.25px solid var(--clr-primary);
    position: relative;
    border-radius: 40px;
    overflow: hidden;

    span {
      line-height: 100%;
    }

    &__progress {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;

      backdrop-filter: invert(1);
    }
  }
</style>
