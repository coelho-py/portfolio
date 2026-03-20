pessoa = int(input("quantas pessoas tem no estadio?"))
popular = pessoa * 0.1 * 5
geral = pessoa * 0.5 * 10
arquibancada = pessoa * 0.3 * 20
cadeira = pessoa * 0.1 * 30

total = popular + geral + arquibancada + cadeira

print(f'renda total:' + str(total))