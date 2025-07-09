import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Dumbbell, Apple, Activity, Users, ShieldCheck, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-vita-blue-50 via-white to-vita-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="mx-auto mb-8 w-20 h-20 bg-gradient-to-r from-vita-blue-500 to-vita-red-500 rounded-full flex items-center justify-center">
              <img src="/lovable-uploads/b639da62-bb05-4a29-b77c-9c6d6e2cc3b2.png" alt="FitConstace" className="w-12 h-12 object-contain" />
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6">FitConstance</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Plataforma multidisciplinar de saúde e bem-estar. Conectamos professores, alunos em formação e usuários para promover conhecimento validado em educação física, nutrição e fisioterapia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-vita-blue-600 hover:bg-vita-blue-700 text-lg px-8 py-3">
                  Começar Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-vita-blue-300 text-vita-blue-600 hover:bg-vita-blue-50">
                  Fazer Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-vita-red-100 rounded-full flex items-center justify-center">
                  <Dumbbell className="w-8 h-8 text-vita-red-600" />
                </div>
                <CardTitle className="text-xl">Educação Física</CardTitle>
                <CardDescription>
                  Treinos personalizados e dicas de exercícios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-vita-blue-500" />
                    Treinos adaptados ao seu perfil
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-vita-blue-500" />
                    Dicas de exercícios seguros
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-vita-blue-500" />
                    Acompanhamento de progresso
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-vita-blue-100 rounded-full flex items-center justify-center">
                  <Apple className="w-8 h-8 text-vita-blue-600" />
                </div>
                <CardTitle className="text-xl">Nutrição</CardTitle>
                <CardDescription>
                  Orientações alimentares personalizadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-vita-blue-500" />
                    Valores nutricionais detalhados
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-vita-blue-500" />
                    Dicas para bulking e cutting
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-vita-blue-500" />
                    Planos alimentares customizados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-vita-red-100 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-vita-red-600" />
                </div>
                <CardTitle className="text-xl">Fisioterapia</CardTitle>
                <CardDescription>
                  Prevenção e cuidados com lesões
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-vita-blue-500" />
                    Alongamentos personalizados
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-vita-blue-500" />
                    Tratamento de lesões simples
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-vita-blue-500" />
                    Cuidados preventivos
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Como Funciona */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Como Funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-vita-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-vita-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Cadastre-se</h3>
                <p className="text-gray-600">
                  Crie seu perfil com informações personalizadas sobre seus objetivos de saúde
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-vita-red-100 rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-8 h-8 text-vita-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Receba Conteúdo</h3>
                <p className="text-gray-600">
                  Acesse informações personalizadas criadas por alunos e validadas por professores
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-vita-blue-100 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-vita-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Evolua</h3>
                <p className="text-gray-600">
                  Acompanhe seu progresso com orientações profissionais e científicas
                </p>
              </div>
            </div>
          </div>

          {/* Tipos de Usuário */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Para Todos os Perfis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Badge variant="secondary" className="mb-4 px-4 py-2 bg-vita-blue-100 text-vita-blue-700">
                  <Users className="w-4 h-4 mr-2" />
                  Usuários
                </Badge>
                <h3 className="text-lg font-semibold mb-2">Pessoas Comuns</h3>
                <p className="text-gray-600 text-sm">
                  Receba orientações personalizadas de saúde e acompanhe seu progresso
                </p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-4 px-4 py-2 bg-vita-red-100 text-vita-red-700">
                  <Star className="w-4 h-4 mr-2" />
                  Alunos
                </Badge>
                <h3 className="text-lg font-semibold mb-2">Estudantes</h3>
                <p className="text-gray-600 text-sm">
                  Contribua com conteúdo educativo e ganhe experiência prática
                </p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-4 px-4 py-2 bg-vita-blue-100 text-vita-blue-700">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Professores
                </Badge>
                <h3 className="text-lg font-semibold mb-2">Educadores</h3>
                <p className="text-gray-600 text-sm">
                  Valide e oriente o conteúdo criado pelos alunos
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center bg-gradient-to-r from-vita-blue-500 to-vita-red-500 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Pronto para Transformar sua Saúde?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Junte-se à nossa comunidade multidisciplinar e alcance seus objetivos de bem-estar
            </p>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-vita-blue-600 hover:bg-gray-100">
                Começar Gratuitamente
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;