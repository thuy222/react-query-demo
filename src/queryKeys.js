export const vmKeys = {
    all: ["vm"],
    lists: () => [...vmKeys.all, "list"],
    list: (pageNum, pageSize) =>
      [...vmKeys.lists(), { pageNum, pageSize }] ,
    details: () => [...vmKeys.all, "detail"],
    detail: (id) => [...vmKeys.details(), id],
  };

  export const workspaceKeys = {
    all: ["workspace"],
    lists: () => [...vmKeys.all, "list"],
    list: (pageNum, pageSize) =>
      [...vmKeys.lists(), { pageNum, pageSize }] ,
    details: () => [...vmKeys.all, "detail"],
    detail: (id) => [...vmKeys.details(), id],
  };
  export const usersKeys = {
    all: ["users"],
    lists: () => [...usersKeys.all, "list"],
    list: (pageNum, pageSize) =>
      [...usersKeys.lists(), { pageNum, pageSize }] ,
    details: () => [...usersKeys.all, "detail"],
    detail: (id) => [...usersKeys.details(), id],
  };


// With this structure, we can invalidate everything todo related with vmkeys.all,
// all the list and all the details,as well as target one specific list if we know excact key.
// It's just a simple object with entries and functions that will produce query keys, 
//which you can then use in your custom hooks

//Question: as const asertion meaning when using with typescript


