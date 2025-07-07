
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Edit3, 
  Save, 
  X,
  Activity,
  Target,
  Calendar,
  Shield
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    idade: '28',
    peso: '75',
    altura: '175',
    pesoDesejado: '80',
    genero: 'masculino',
    tempoTreino: 'intermediario',
    aceitaAlunosFormacao: true
  });

  const { toast } = useToast();

  const calculateIMC = () => {
    const pesoNum = parseFloat(userData.peso);
    const alturaNum = parseFloat(userData.altura) / 100;
    return (pesoNum / (alturaNum * alturaNum)).toFixed(2);
  };

  const getIMCStatus = () => {
    const imc = parseFloat(calculateIMC());
    if (imc < 18.5) return { status: 'Abaixo do peso', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (imc < 25) return { status: 'Peso normal', color: 'text-green-600', bg: 'bg-green-100' };
    if (imc < 30) return { status: 'Sobrepeso', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { status: 'Obesidade', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Aqui você restauraria os dados originais se necessário
  };

  const imcData = getIMCStatus();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{userData.nome}</h1>
                <p className="text-gray-600">{userData.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)} className="flex items-center gap-2">
                  <Edit3 className="w-4 h-4" />
                  Editar Perfil
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button onClick={handleSave} className="flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Salvar
                  </Button>
                  <Button variant="outline" onClick={handleCancel} className="flex items-center gap-2">
                    <X className="w-4 h-4" />
                    Cancelar
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal - Informações Pessoais */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Informações Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input
                      id="nome"
                      value={userData.nome}
                      onChange={(e) => setUserData({...userData, nome: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({...userData, email: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idade">Idade</Label>
                    <Input
                      id="idade"
                      type="number"
                      value={userData.idade}
                      onChange={(e) => setUserData({...userData, idade: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="genero">Gênero</Label>
                    <Select 
                      value={userData.genero} 
                      onValueChange={(value) => setUserData({...userData, genero: value})}
                      disabled={!isEditing}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="feminino">Feminino</SelectItem>
                        <SelectItem value="nao-binario">Não-binário</SelectItem>
                        <SelectItem value="prefiro-nao-dizer">Prefiro não dizer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Informações Físicas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="peso">Peso Atual (kg)</Label>
                    <Input
                      id="peso"
                      type="number"
                      step="0.1"
                      value={userData.peso}
                      onChange={(e) => setUserData({...userData, peso: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="altura">Altura (cm)</Label>
                    <Input
                      id="altura"
                      type="number"
                      value={userData.altura}
                      onChange={(e) => setUserData({...userData, altura: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pesoDesejado">Peso Desejado (kg)</Label>
                    <Input
                      id="pesoDesejado"
                      type="number"
                      step="0.1"
                      value={userData.pesoDesejado}
                      onChange={(e) => setUserData({...userData, pesoDesejado: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Experiência em Treinos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="tempoTreino">Há quanto tempo treina?</Label>
                  <Select 
                    value={userData.tempoTreino} 
                    onValueChange={(value) => setUserData({...userData, tempoTreino: value})}
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iniciante">Iniciante (menos de 6 meses)</SelectItem>
                      <SelectItem value="intermediario">Intermediário (6 meses a 2 anos)</SelectItem>
                      <SelectItem value="avancado">Avançado (2 a 5 anos)</SelectItem>
                      <SelectItem value="expert">Expert (mais de 5 anos)</SelectItem>
                      <SelectItem value="nao-treino">Não treino ainda</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Preferências
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="aceita-alunos">Receber conteúdo de alunos em formação</Label>
                    <p className="text-sm text-gray-600">
                      Conteúdo educativo validado por professores
                    </p>
                  </div>
                  <Switch
                    id="aceita-alunos"
                    checked={userData.aceitaAlunosFormacao}
                    onCheckedChange={(checked) => setUserData({...userData, aceitaAlunosFormacao: checked})}
                    disabled={!isEditing}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Estatísticas */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Suas Métricas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`p-4 rounded-lg ${imcData.bg}`}>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">{calculateIMC()}</div>
                    <div className="text-sm font-medium mb-2">Índice de Massa Corporal</div>
                    <Badge variant="secondary" className={imcData.color}>
                      {imcData.status}
                    </Badge>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Peso Atual</span>
                    <span className="font-medium">{userData.peso}kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Meta de Peso</span>
                    <span className="font-medium">{userData.pesoDesejado}kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Altura</span>
                    <span className="font-medium">{userData.altura}cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Idade</span>
                    <span className="font-medium">{userData.idade} anos</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nível de Experiência</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Badge variant="outline" className="text-lg py-2 px-4">
                    {userData.tempoTreino === 'iniciante' && 'Iniciante'}
                    {userData.tempoTreino === 'intermediario' && 'Intermediário'}
                    {userData.tempoTreino === 'avancado' && 'Avançado'}
                    {userData.tempoTreino === 'expert' && 'Expert'}
                    {userData.tempoTreino === 'nao-treino' && 'Não treina'}
                  </Badge>
                  <p className="text-sm text-gray-600 mt-2">
                    Conteúdo personalizado para seu nível
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
