
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dumbbell, Clock, Target, TrendingUp, CheckCircle, Play } from 'lucide-react';

const EducacaoFisica = () => {
  const [treinoAtual, setTreinoAtual] = useState('peito-triceps');

  const treinos = {
    'peito-triceps': {
      nome: 'Peito e Tríceps',
      duracao: '45-60 min',
      exercicios: [
        { nome: 'Supino Reto', series: '4x8-12', peso: '80kg', concluido: true },
        { nome: 'Supino Inclinado', series: '3x10-15', peso: '70kg', concluido: true },
        { nome: 'Crucifixo', series: '3x12-15', peso: '25kg', concluido: false },
        { nome: 'Tríceps Testa', series: '4x10-12', peso: '40kg', concluido: false },
        { nome: 'Tríceps Corda', series: '3x12-15', peso: '30kg', concluido: false }
      ]
    }
  };

  const treinoData = treinos[treinoAtual];
  const progressoTreino = (treinoData.exercicios.filter(e => e.concluido).length / treinoData.exercicios.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-vita-red-500 to-vita-red-600 text-white p-6 rounded-lg mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Dumbbell className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Educação Física</h1>
        </div>
        <p className="text-red-100">Treinos personalizados para seu perfil</p>
      </div>

      {/* Treino Atual */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5 text-vita-red-600" />
                {treinoData.nome}
              </CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <Clock className="w-4 h-4" />
                {treinoData.duracao}
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-vita-red-600 border-vita-red-200">
              {Math.round(progressoTreino)}% Concluído
            </Badge>
          </div>
          <Progress value={progressoTreino} className="mt-3" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {treinoData.exercicios.map((exercicio, index) => (
              <div key={index} className={`p-3 rounded-lg border ${exercicio.concluido ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${exercicio.concluido ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                      {exercicio.concluido && <CheckCircle className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-medium">{exercicio.nome}</h4>
                      <p className="text-sm text-gray-600">{exercicio.series} • {exercicio.peso}</p>
                    </div>
                  </div>
                  {!exercicio.concluido && (
                    <Button size="sm" variant="outline" className="text-vita-red-600 border-vita-red-200">
                      Iniciar
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dicas Personalizadas */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-vita-blue-600" />
            Dicas Personalizadas
          </CardTitle>
          <CardDescription>Baseado no seu perfil intermediário</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-vita-blue-50 rounded-lg border border-vita-blue-200">
              <h4 className="font-medium text-vita-blue-800 mb-2">Técnica no Supino</h4>
              <p className="text-sm text-vita-blue-700">
                Mantenha os pés firmes no chão e contraía o core durante todo o movimento. 
                Desça a barra de forma controlada até tocar o peito.
              </p>
              <Badge variant="secondary" className="mt-2 bg-vita-blue-100 text-vita-blue-700">
                Validado por Prof. João Silva
              </Badge>
            </div>
            
            <div className="p-4 bg-vita-red-50 rounded-lg border border-vita-red-200">
              <h4 className="font-medium text-vita-red-800 mb-2">Descanso Entre Séries</h4>
              <p className="text-sm text-vita-red-700">
                Para ganho de força, descanse 2-3 minutos entre as séries. 
                Para hipertrofia, 60-90 segundos é o ideal.
              </p>
              <Badge variant="secondary" className="mt-2 bg-vita-red-100 text-vita-red-700">
                Validado por Prof. Ana Costa
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progresso Semanal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-vita-blue-600" />
            Progresso Semanal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-vita-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-vita-blue-600">4</div>
              <div className="text-sm text-vita-blue-700">Treinos Concluídos</div>
            </div>
            <div className="text-center p-4 bg-vita-red-50 rounded-lg">
              <div className="text-2xl font-bold text-vita-red-600">6h 30m</div>
              <div className="text-sm text-vita-red-700">Tempo Total</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducacaoFisica;
