export enum MaskInputType {
  cpf,
}

export function maskCPF(value: string): string {
  let valor = value;

  if (valor.length <= 14) {
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{2})$/, '$1-$2');
  } else {
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/(\d{2})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1/$2');

    valor = valor.replace(/(\d{3})(\d{2})$/, '$1-$2');
  }

  return valor;
}
