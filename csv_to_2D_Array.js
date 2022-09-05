const csv_to_array = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));

console.log(csv_to_array("a,b\nc,d"));
console.log(csv_to_array("a;b\nc;d", ";"));
console.log(csv_to_array("head1,head2\na,b\nc,d", ",", true));
const data = "a;b\nc;d";
const a = false;

//manual
console.log(
  data
    .slice(a ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => {
      return v.split(";");
    })
);
