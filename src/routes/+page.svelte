<script lang="ts">


    export let data:any;

    $:console.log(data.res)
    $:({res} = data)


</script>



{#each res as item}
    {`${item.title}: ${item.content}`}
    <form method="POST" action="?/delete">
        <input name="id" type="hidden" value={item.id}>
        <button>delete</button>
    </form>
    <br>
{/each}

<form method="POST" action="?/create">
  <label>
    Title
    <input name="title">
  </label>
  <label>
    content
    <input name="content">
  </label>
  <button>Anlegen</button>
</form>