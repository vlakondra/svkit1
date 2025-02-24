<script>
  import { fade, fly } from 'svelte/transition';
  import { base } from "$app/paths";
  import { Accordion } from "bits-ui";
  let items = ['A', 'B', 'C'];
  let selectedIndex = 0;
  let props = $props()
</script>

<Accordion.Root>
	<Accordion.Item>
		<Accordion.Header>
			<Accordion.Trigger style="font-size: 2em;" bla='blaBla'>
        {#snippet child({ props })}
        {JSON.stringify(props)}
        {#if props['data-state'] == 'open'}
        <p>Открыто</p>
        {:else}
        <p>Закрыто</p>
        {/if}
		    <div {...props}>{props['data-state']} Open accordion item</div>
	     {/snippet}
      </Accordion.Trigger>
		</Accordion.Header>
		<Accordion.Content>
      <div in:fly={{ x: 200, duration: 2000 }}  out:fade>First accordion content </div>
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

<div data-ddd>123</div>
<div data-selectedIndex={selectedIndex}>TEST</div>

{#each items as item, i}
  <div
    data-selected={i === selectedIndex}
    on:click={() => selectedIndex = i}
  >
    {item}
  </div>
{/each}

<style>
 :global( div[data-state='open']){
    background: red;
  }
  :global(div[data-state='closed']){
    background: blue
  }
  .cls{
    border:1px solid blue;
  }
  [data-selected='true'] {
    background-color: gold;
  }
  [data-selectedIndex='1']{
    color:blue
  }
  [data-selectedIndex='2']{
    color:yellow
  }
</style>
