import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Dumbbell, 
  Apple, 
  Activity, 
  User, 
  Target,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';

const Dashboard = () => {
  // Dados simulados do usuário
  const userProfile = {
    name: "João Silva",
    imc: 24.2,
    imcStatus: "Peso normal",
    pesoAtual: 75,
    pesoMeta: 80,
    experiencia: "Intermediário"
  };

  const progressoPeso = ((userProfile.pesoAtual / userProfile.pesoMeta) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-vita-blue-500 to-vita-red-600 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Olá, {userProfile.name}! 👋</h1>
              <p className="text-blue-100">Bem-vindo ao seu painel de saúde</p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/profile">
                <Button variant="secondary" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Perfil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Cards de Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">IMC Atual</p>
                  <p className="text-2xl font-bold text-vita-blue-600">{userProfile.imc}</p>
                  <Badge variant="secondary" className="text-xs mt-1">
                    {userProfile.imcStatus}
                  </Badge>
                </div>
                <Activity className="w-8 h-8 text-vita-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Peso Atual</p>
                  <p className="text-2xl font-bold text-vita-red-600">{userProfile.pesoAtual}kg</p>
                  <Badge variant="outline" className="text-xs mt-1">
                    Meta: {userProfile.pesoMeta}kg
                  </Badge>
                </div>
                <Target className="w-8 h-8 text-vita-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Experiência</p>
                  <p className="text-lg font-bold text-vita-blue-600">{userProfile.experiencia}</p>
                  <Badge variant="outline" className="text-xs mt-1">
                    <Award className="w-3 h-3 mr-1" />
                    6m - 2a
                  </Badge>
                </div>
                <TrendingUp className="w-8 h-8 text-vita-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Progresso</p>
                  <p className="text-2xl font-bold text-vita-red-600">{Math.round(progressoPeso)}%</p>
                  <Progress value={progressoPeso} className="mt-2" />
                </div>
                <Clock className="w-8 h-8 text-vita-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seções Principais */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Educação Física */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-vita-red-100 rounded-lg">
                  <Dumbbell className="w-6 h-6 text-vita-red-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Educação Física</CardTitle>
                  <CardDescription>Treinos e exercícios personalizados</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-vita-red-50 rounded-lg">
                  <h4 className="font-medium text-sm text-vita-red-800">Treino do Dia</h4>
                  <p className="text-xs text-vita-red-600 mt-1">Treino de Peito e Tríceps</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm">Dicas Personalizadas</h4>
                  <p className="text-xs text-gray-600 mt-1">Para seu perfil intermediário</p>
                </div>
                <Link to="/educacao-fisica">
                  <Button className="w-full bg-vita-red-600 hover:bg-vita-red-700">
                    Ver Treinos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Nutrição */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-vita-blue-100 rounded-lg">
                  <Apple className="w-6 h-6 text-vita-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Nutrição</CardTitle>
                  <CardDescription>Alimentação e valores nutricionais</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-vita-blue-50 rounded-lg">
                  <h4 className="font-medium text-sm text-vita-blue-800">Plano Nutricional</h4>
                  <p className="text-xs text-vita-blue-600 mt-1">Foco em ganho de massa</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm">Dicas Alimentares</h4>
                  <p className="text-xs text-vita-blue-600 mt-1">Baseado no seu IMC</p>
                </div>
                <Link to="/nutricao">
                  <Button className="w-full bg-vita-blue-600 hover:bg-vita-blue-700">
                    Ver Nutrição
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Fisioterapia */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-vita-red-100 rounded-lg">
                  <Heart className="w-6 h-6 text-vita-red-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Fisioterapia</CardTitle>
                  <CardDescription>Alongamentos e prevenção</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-vita-red-50 rounded-lg">
                  <h4 className="font-medium text-sm text-vita-red-800">Alongamentos</h4>
                  <p className="text-xs text-vita-red-600 mt-1">Rotina pré e pós treino</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm">Prevenção</h4>
                  <p className="text-xs text-gray-600 mt-1">Cuidados com lesões</p>
                </div>
                <Link to="/fisioterapia">
                  <Button className="w-full bg-vita-red-600 hover:bg-vita-red-700">
                    Ver Cuidados
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conteúdo Recente */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Conteúdo Recente</CardTitle>
            <CardDescription>Informações validadas por professores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-vita-red-100 rounded">
                    <Dumbbell className="w-4 h-4 text-vita-red-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Como melhorar sua técnica no supino</h4>
                    <p className="text-xs text-gray-600 mt-1">Por aluno de Educação Física - Validado por Prof. Maria</p>
                    <Badge variant="outline" className="text-xs mt-2 text-vita-red-600 border-vita-red-200">
                      Educação Física
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-vita-blue-100 rounded">
                    <Apple className="w-4 h-4 text-vita-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Proteínas: quando e quanto consumir</h4>
                    <p className="text-xs text-gray-600 mt-1">Por aluno de Nutrição - Validado por Prof. Carlos</p>
                    <Badge variant="outline" className="text-xs mt-2 text-vita-blue-600 border-vita-blue-200">
                      Nutrição
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
