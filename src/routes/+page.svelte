<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { slide } from "svelte/transition";

  import { base } from "$app/paths";
  import { Accordion } from "bits-ui";
  let items = ["A", "B", "C"];
  let selectedIndex = 0;
  // let props = $props();
  let myValue = $state([]);
</script>

<p>??{myValue}</p>
<Accordion.Root
  bind:value={myValue}
  onValueChange={(v: string[]) => console.log("value", v)}
>
  <Accordion.Item>
    <Accordion.Header>
      <Accordion.Trigger style="font-size: 2em;">
        <!--   {#snippet child({ props })}
          {JSON.stringify(props)}
          {#if props["data-state"] == "open"}
            <h1>Открыто</h1>
          {:else}
            <h2>Закрыто</h2>
          {/if}
          <div {...props}>{props["data-state"]} Open accordion item</div>
        {/snippet}-->

        <p>Open accordion item!!</p>
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>
      <!--  {#snippet child({ props })}
        {#if props["data-state"] == "open"}
          <div {...props} >
            The forceMount prop ensures the components are always in the DOM.
            The child snippet provides access to the open state and component props.
            Svelte's #if block controls when the content is visible.
            Transition directives (transition:fade and transition:fly) apply the animations.
        </div>
        {/if}
      {/snippet}
      -->
      <div>
        The forceMount prop ensures the components are always in the DOM. The
        child snippet provides access to the open state and component props.
        Svelte's #if block controls when the content is visible. Transition
        directives (transition:fade and transition:fly) apply the animations.
      </div>
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Header>
      <Accordion.Trigger>Second</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>Second accordion content</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Header>
      <Accordion.Trigger>Third</Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>Third accordion content</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>



<style>
  :global(div[data-accordion-root]) {
    width: 75%;
    margin: auto;
  }

  :global([data-accordion-trigger]) {
    border: 0;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }
  /*
:global([data-accordion-content]) {
  overflow: hidden; 

  transition: all 0.3s ease-out; 
}
*/

  :global(div[data-accordion-content][data-state="open"]) {
    background: rgb(111, 181, 221);
    animation: slide-down 0.73s ease-out;
    max-height: 500px;
    opacity: 1;
  }

  :global([data-accordion-content][data-state="closed"]) {
    background: blue;
    animation: slide-up 0.73s ease-out; /* Анимация закрытия */
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  /* Анимация раскрытия */
  @keyframes slide-down {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 1000px;
      opacity: 1;
    }
  }

  /* Анимация скрытия */
  @keyframes slide-up {
    from {
      max-height: 1000px;
      opacity: 1;
    }
    to {
      max-height: 0;
      opacity: 0;
    }
  }

  /*
  .cls {
    border: 1px solid blue;
  }
  [data-selected="true"] {
    background-color: gold;
  }
  [data-selectedIndex="1"] {
    color: blue;
  }
  [data-selectedIndex="2"] {
    color: yellow;
  }

  */
</style>
