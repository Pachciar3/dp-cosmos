function sort(dataToSort, a, b) {
  dataToSort.sort((a, b) => {
    let fa = a.toString().toLowerCase(),
      fb = b.toString().toLowerCase();

    if (fa < fb) {
      return 1;
    }
    if (fa > fb) {
      return -1;
    }
    return 0;
  })
}

export default sort;