
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, AlertTriangle, Clock, CheckCircle, Play, Shield } from 'lucide-react';

const Fisioterapia = () => {
  const [sessaoAtiva, setSessaoAtiva] = useState(null);

  const alongamentos = [
    {
      nome: 'Alongamento de Peito',
      duracao: '30 segundos',
      descricao: 'Posicione o braço na parede e gire o corpo para o lado oposto',
      categoria: 'Pré-treino',
      concluido: false
    },
    {
      nome: 'Alongamento de Ombros',
      duracao: '20 segundos cada lado',
      descricao: 'Puxe o braço através do peito com a mão oposta',
      categoria: 'Pré-treino',
      concluido: false
    },
    {
      nome: 'Alongamento de Tríceps',
      duracao: '30 segundos cada braço',
      descricao: 'Flexione o cotovelo e puxe com a mão oposta',
      categoria: 'Pós-treino',
      concluido: false
    }
  ];

  const cuidadosLesoes = [
    {
      tipo: 'Dor no Ombro',
      causa: 'Overuse ou técnica inadequada',
      tratamento: 'Repouso, gelo 15-20min, alongamentos leves',
      prevencao: 'Aquecimento adequado, progressão gradual de carga',
      urgencia: 'baixa'
    },
    {
      tipo: 'Dor Lombar',
      causa: 'Postura inadequada ou core fraco',
      tratamento: 'Alongamento, fortalecimento do core, calor local',
      prevencao: 'Exercícios de mobilidade, técnica correta',
      urgencia: 'media'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-vita-red-500 to-vita-blue-500 text-white p-6 rounded-lg mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Fisioterapia</h1>
        </div>
        <p className="text-red-100">Prevenção e cuidados com seu corpo</p>
      </div>

      {/* Rotina de Alongamentos */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="w-5 h-5 text-vita-blue-600" />
            Rotina de Alongamentos
          </CardTitle>
          <CardDescription>Baseado no seu treino de hoje</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alongamentos.map((alongamento, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{alongamento.nome}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{alongamento.duracao}</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          alongamento.categoria === 'Pré-treino' 
                            ? 'text-vita-blue-600 border-vita-blue-200' 
                            : 'text-vita-red-600 border-vita-red-200'
                        }`}
                      >
                        {alongamento.categoria}
                      </Badge>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-vita-blue-600 border-vita-blue-200"
                    onClick={() => setSessaoAtiva(index)}
                  >
                    Iniciar
                  </Button>
                </div>
                <p className="text-sm text-gray-600">{alongamento.descricao}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-vita-blue-50 rounded-lg border border-vita-blue-200">
            <h4 className="font-medium text-vita-blue-800 mb-2">Dica Importante</h4>
            <p className="text-sm text-vita-blue-700">
              Realize alongamentos antes e depois do treino para melhorar a flexibilidade 
              e reduzir o risco de lesões. Mantenha a respiração controlada durante os exercícios.
            </p>
            <Badge variant="secondary" className="mt-2 bg-vita-blue-100 text-vita-blue-700">
              Validado por Ft. Sandra Oliveira
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Prevenção de Lesões */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-vita-red-600" />
            Prevenção de Lesões
          </CardTitle>
          <CardDescription>Cuidados específicos para seu tipo de treino</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-yellow-600" />
                <h4 className="font-medium text-yellow-800">Atenção ao Treino de Peito</h4>
              </div>
              <p className="text-sm text-yellow-700 mb-2">
                Treinos de peito podem sobrecarregar os ombros. Certifique-se de:
              </p>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Aquecer bem os ombros antes do treino</li>
                <li>• Não descer a barra muito baixo no supino</li>
                <li>• Manter os ombros retraídos durante os exercícios</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-medium text-green-800">Boa Postura</h4>
              </div>
              <p className="text-sm text-green-700">
                Você está mantendo uma boa postura durante os exercícios. 
                Continue assim para evitar lesões na coluna.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tratamento de Lesões Simples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-vita-red-600" />
            Tratamento de Lesões Simples
          </CardTitle>
          <CardDescription>Primeiros socorros para lesões comuns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cuidadosLesoes.map((cuidado, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{cuidado.tipo}</h4>
                  <Badge 
                    variant="outline" 
                    className={`${
                      cuidado.urgencia === 'baixa' 
                        ? 'text-green-600 border-green-200' 
                        : cuidado.urgencia === 'media'
                        ? 'text-yellow-600 border-yellow-200'
                        : 'text-red-600 border-red-200'
                    }`}
                  >
                    {cuidado.urgencia === 'baixa' ? 'Baixa' : 'Média'} Urgência
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Causa: </span>
                    <span className="text-gray-600">{cuidado.causa}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Tratamento: </span>
                    <span className="text-gray-600">{cuidado.tratamento}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Prevenção: </span>
                    <span className="text-gray-600">{cuidado.prevencao}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h4 className="font-medium text-red-800">Importante</h4>
            </div>
            <p className="text-sm text-red-700">
              Estas são orientações para lesões simples. Dores persistentes ou lesões graves 
              devem ser avaliadas por um profissional de saúde qualificado.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Fisioterapia;
