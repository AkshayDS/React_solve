function TodoItem() {
let todoname='Buy Milk'
let tododate='7/2/2026'

  return (
    <div class="container ">
      <div class="row ak-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger ak-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
