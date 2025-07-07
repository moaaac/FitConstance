
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Apple, Flame, Droplets, Zap, TrendingUp, Plus } from 'lucide-react';

const Nutricao = () => {
  const [objetivo, setObjetivo] = useState('bulking');

  const metasDiarias = {
    calorias: { atual: 2100, meta: 2800 },
    proteinas: { atual: 120, meta: 150 },
    carboidratos: { atual: 250, meta: 350 },
    gorduras: { atual: 65, meta: 90 }
  };

  const alimentos = [
    { nome: 'Peito de Frango (150g)', calorias: 248, proteinas: 46, carboidratos: 0, gorduras: 5 },
    { nome: 'Arroz Integral (100g)', calorias: 216, proteinas: 5, carboidratos: 45, gorduras: 1 },
    { nome: 'Batata Doce (200g)', calorias: 172, proteinas: 4, carboidratos: 40, gorduras: 0 },
    { nome: 'Abacate (1/2 unidade)', calorias: 160, proteinas: 2, carboidratos: 9, gorduras: 15 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-vita-blue-500 to-vita-blue-600 text-white p-6 rounded-lg mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Apple className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Nutrição</h1>
        </div>
        <p className="text-blue-100">Alimentação personalizada para seus objetivos</p>
      </div>

      {/* Objetivo Atual */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Objetivo Atual</span>
            <Badge variant="outline" className="text-vita-blue-600 border-vita-blue-200">
              {objetivo === 'bulking' ? 'Ganho de Massa' : 'Definição'}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Button 
              variant={objetivo === 'bulking' ? "default" : "outline"}
              className={objetivo === 'bulking' ? "bg-vita-blue-600 hover:bg-vita-blue-700" : ""}
              onClick={() => setObjetivo('bulking')}
            >
              Bulking
            </Button>
            <Button 
              variant={objetivo === 'cutting' ? "default" : "outline"}
              className={objetivo === 'cutting' ? "bg-vita-red-600 hover:bg-vita-red-700" : ""}
              onClick={() => setObjetivo('cutting')}
            >
              Cutting
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Metas Diárias */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-vita-blue-600" />
            Metas Diárias
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-medium">Calorias</span>
              </div>
              <span className="text-sm text-gray-600">
                {metasDiarias.calorias.atual} / {metasDiarias.calorias.meta} kcal
              </span>
            </div>
            <Progress value={(metasDiarias.calorias.atual / metasDiarias.calorias.meta) * 100} />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-vita-red-500" />
                <span className="font-medium">Proteínas</span>
              </div>
              <span className="text-sm text-gray-600">
                {metasDiarias.proteinas.atual} / {metasDiarias.proteinas.meta} g
              </span>
            </div>
            <Progress value={(metasDiarias.proteinas.atual / metasDiarias.proteinas.meta) * 100} />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Apple className="w-5 h-5 text-vita-blue-500" />
                <span className="font-medium">Carboidratos</span>
              </div>
              <span className="text-sm text-gray-600">
                {metasDiarias.carboidratos.atual} / {metasDiarias.carboidratos.meta} g
              </span>
            </div>
            <Progress value={(metasDiarias.carboidratos.atual / metasDiarias.carboidratos.meta) * 100} />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">Gorduras</span>
              </div>
              <span className="text-sm text-gray-600">
                {metasDiarias.gorduras.atual} / {metasDiarias.gorduras.meta} g
              </span>
            </div>
            <Progress value={(metasDiarias.gorduras.atual / metasDiarias.gorduras.meta) * 100} />
          </div>
        </CardContent>
      </Card>

      {/* Alimentos Sugeridos */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Alimentos para {objetivo === 'bulking' ? 'Ganho de Massa' : 'Definição'}</CardTitle>
          <CardDescription>Baseado no seu perfil e objetivos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alimentos.map((alimento, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{alimento.nome}</h4>
                  <Button size="sm" variant="outline" className="text-vita-blue-600 border-vita-blue-200">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs text-gray-600">
                  <div>
                    <span className="font-medium text-orange-600">{alimento.calorias}</span>
                    <div>kcal</div>
                  </div>
                  <div>
                    <span className="font-medium text-vita-red-600">{alimento.proteinas}g</span>
                    <div>Prot.</div>
                  </div>
                  <div>
                    <span className="font-medium text-vita-blue-600">{alimento.carboidratos}g</span>
                    <div>Carb.</div>
                  </div>
                  <div>
                    <span className="font-medium text-yellow-600">{alimento.gorduras}g</span>
                    <div>Gord.</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dicas Nutricionais */}
      <Card>
        <CardHeader>
          <CardTitle>Dicas Nutricionais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {objetivo === 'bulking' ? (
              <div className="p-4 bg-vita-blue-50 rounded-lg border border-vita-blue-200">
                <h4 className="font-medium text-vita-blue-800 mb-2">Dica para Bulking</h4>
                <p className="text-sm text-vita-blue-700">
                  Consuma 1.6-2.2g de proteína por kg de peso corporal. 
                  Distribua as refeições ao longo do dia e priorize carboidratos complexos.
                </p>
                <Badge variant="secondary" className="mt-2 bg-vita-blue-100 text-vita-blue-700">
                  Validado por Prof. Carla Nutricionista
                </Badge>
              </div>
            ) : (
              <div className="p-4 bg-vita-red-50 rounded-lg border border-vita-red-200">
                <h4 className="font-medium text-vita-red-800 mb-2">Dica para Cutting</h4>
                <p className="text-sm text-vita-red-700">
                  Mantenha alta ingestão de proteínas e fibras. 
                  Evite carboidratos simples e priorize gorduras boas como abacate e oleaginosas.
                </p>
                <Badge variant="secondary" className="mt-2 bg-vita-red-100 text-vita-red-700">
                  Validado por Prof. Marcos Nutricionista
                </Badge>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Nutricao;
