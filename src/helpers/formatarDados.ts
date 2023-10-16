// function formatarDados(data: any) {
//   const dadosOrganizados = [];

//   data.forEach((element: any) => {
//     element.brand;
//   });
// }

type DataType = {
  id: number;
  brand: string;
  model: string;
  year: number;
}[];

export function organizeDataByBrand(data: DataType) {
  const organizados: any = {};

  data.forEach((item) => {
    const marca = item.brand;
    if (!organizados[marca]) {
      organizados[marca] = [];
    }
    organizados[marca].push(item);
  });

  return Object.keys(organizados).map((marca) => ({
    title: marca,
    data: organizados[marca],
  }));
}
