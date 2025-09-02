export type BinId = 'AZUL' | 'VERMELHA' | 'VERDE' | 'AMARELA' | 'MARROM' | 'CINZA' | 'ECOPONTO'

export interface EcoBin {
    id: BinId | 'ECOPONTO'
    nome: string
    cor: string
    emoji: string
}

export interface EcoItem {
    id: string
    nome: string
    material: string
    lixeira: BinId | 'ECOPONTO'
    tempo_decomposicao: string
    exemplos?: string[]
    observacoes?: string
    icone?: string
}

export interface EcoScanDB {
    bins: EcoBin[]
    items: EcoItem[]
}
