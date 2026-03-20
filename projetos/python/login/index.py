def calcular_acrescimos_salario(cargo, filhos, plano_saude, vale_transporte):
    acrescimos = 0
    beneficios = {}

    ticket_alimentacao = 0.11 * salario_bruto
    beneficios['Ticket Alimentação'] = ticket_alimentacao
    acrescimos += ticket_alimentacao

    if filhos > 0:
        auxilio_creche = 0.05 * salario_bruto * filhos
        beneficios['Auxílio Creche'] = auxilio_creche
        acrescimos += auxilio_creche

    if vale_transporte == 1:
        vale_transporte_valor = 0.10 * salario_bruto
        beneficios['Vale Transporte'] = vale_transporte_valor
        acrescimos += vale_transporte_valor

    if plano_saude == 1:
        plano_saude_valor = 400
        beneficios['Plano de Saúde'] = plano_saude_valor
        acrescimos += plano_saude_valor

    if cargo == 2 or cargo == 3:
        periculosidade = 0.10 * salario_bruto
        beneficios['Periculosidade'] = periculosidade
        acrescimos += periculosidade

    return acrescimos, beneficios

def calcular_descontos(cargo):
    descontos = {}

    if cargo == 1 or cargo == 2:
        inss = 0.11 * salario_bruto
    else:
        inss = 0.10 * salario_bruto
    descontos['INSS'] = inss
    total_descontos = inss
    return total_descontos, descontos

def exibir_dados_funcionario(nome, cargo_nome, cidade, salario_bruto, acrescimos, descontos, salario_liquido):
    print("Gee Engenharia ")
    print(f"Nome: {nome}")
    print(f"Cargo: {cargo_nome}")
    print(f"Cidade de Atuação: {cidade}")
    print(f"Salário Bruto: R$ {salario_bruto:.2f}")
    
    print("\nAcréscimos:")
    total_acrescimos = 0
    for beneficio, valor in acrescimos.items():
        print(f"{beneficio}: R$ {valor:.2f}")
        total_acrescimos += valor
    print(f"Total de Acréscimos: R$ {total_acrescimos:.2f}")

    print("\nDescontos:")
    total_descontos = 0
    for desconto, valor in descontos.items():
        print(f"{desconto}: R$ {valor:.2f}")
        total_descontos += valor
    print(f"Total de Descontos: R$ {total_descontos:.2f}")
    
    print(f"\nSalário Líquido: R$ {salario_liquido:.2f}")

cargos = {1: 'Engenheiro', 2: 'Mestre de Obra', 3: 'Pedreiro'}
salarios = {1: 10000.00, 2: 2500.00, 3: 1500.00}

nome = input("Digite o nome do funcionário (somente o primeiro nome): ").strip()
print("\nEscolha a cidade de atuação:")
print("1 - São João dos Patos")
print("2 - Asa Dourada")
print("3 - Lago do Pato Feio")
cidade_opcao = int(input("Digite a opção de cidade (1, 2 ou 3): "))

if cidade_opcao == 1:
    cidade = "São João dos Patos"
elif cidade_opcao == 2:
    cidade = "Asa Dourada"
elif cidade_opcao == 3:
    cidade = "Lago do Pato Feio"
else:
    print("Opção inválida, utilizando 'São João dos Patos' por padrão.")
    cidade = "São João dos Patos"

numero_filhos = int(input("Quantos filhos o funcionário tem? "))
plano_saude = int(input("O funcionário tem plano de saúde? (1 - Sim, 2 - Não): "))
vale_transporte = int(input("O funcionário tem vale transporte? (1 - Sim, 2 - Não): "))

print("\nEscolha o cargo do funcionário:")
print("1 - Engenheiro")
print("2 - Mestre de Obra")
print("3 - Pedreiro")
cargo_opcao = int(input("Digite a opção do cargo (1, 2 ou 3): "))

if cargo_opcao in cargos:
    cargo_nome = cargos[cargo_opcao]
    salario_bruto = salarios[cargo_opcao]
else:
    print("Opção inválida, cargo será 'Engenheiro' por padrão.")
    cargo_nome = "Engenheiro"
    salario_bruto = 10000.00

acrescimos, beneficios = calcular_acrescimos_salario(cargo_opcao, numero_filhos, plano_saude, vale_transporte)
descontos, descontos_detalhes = calcular_descontos(cargo_opcao)

salario_liquido = salario_bruto + acrescimos - descontos

exibir_dados_funcionario(nome, cargo_nome, cidade, salario_bruto, beneficios, descontos_detalhes, salario_liquido)
