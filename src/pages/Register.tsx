import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    senha: '',
    idade: '',
    peso: '',
    altura: '',
    pesoDesejado: '',
    genero: '',
    tempoTreino: '',
    aceitaAlunosFormacao: false
  });
  const [imc, setImc] = useState(0);
  const { toast } = useToast();

  const calculateIMC = () => {
    if (userData.peso && userData.altura) {
      const pesoNum = parseFloat(userData.peso);
      const alturaNum = parseFloat(userData.altura) / 100; // converter cm para metros
      const imcCalculado = pesoNum / (alturaNum * alturaNum);
      setImc(parseFloat(imcCalculado.toFixed(2)));
    }
  };

  useEffect(() => {
    calculateIMC();
  }, [userData.peso, userData.altura]);

  const getIMCStatus = () => {
    if (imc < 18.5) return { status: 'Abaixo do peso', color: 'text-vita-blue-600' };
    if (imc < 25) return { status: 'Peso normal', color: 'text-vita-blue-600' };
    if (imc < 30) return { status: 'Sobrepeso', color: 'text-vita-red-600' };
    return { status: 'Obesidade', color: 'text-vita-red-600' };
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Bem-vindo ao VitaMulti!",
    });
  };

  const progressValue = (step / 3) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-vita-blue-50 to-vita-red-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-vita-blue-500 to-vita-red-600 rounded-lg flex items-center justify-center">
            <img src="/lovable-uploads/b639da62-bb05-4a29-b77c-9c6d6e2cc3b2.png" alt="VitaMulti" className="w-8 h-8 object-contain" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">Criar Conta - VitaMulti</CardTitle>
          <CardDescription>Passo {step} de 3</CardDescription>
          <Progress value={progressValue} className="w-full mt-2" />
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Informações Básicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input 
                    id="nome" 
                    value={userData.nome}
                    onChange={(e) => setUserData({...userData, nome: e.target.value})}
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={userData.email}
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senha">Senha</Label>
                  <Input 
                    id="senha" 
                    type="password"
                    value={userData.senha}
                    onChange={(e) => setUserData({...userData, senha: e.target.value})}
                    placeholder="Escolha uma senha segura"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="idade">Idade</Label>
                  <Input 
                    id="idade" 
                    type="number"
                    value={userData.idade}
                    onChange={(e) => setUserData({...userData, idade: e.target.value})}
                    placeholder="Sua idade"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Informações Físicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="peso">Peso Atual (kg)</Label>
                  <Input 
                    id="peso" 
                    type="number"
                    step="0.1"
                    value={userData.peso}
                    onChange={(e) => setUserData({...userData, peso: e.target.value})}
                    placeholder="Ex: 70.5"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="altura">Altura (cm)</Label>
                  <Input 
                    id="altura" 
                    type="number"
                    value={userData.altura}
                    onChange={(e) => setUserData({...userData, altura: e.target.value})}
                    placeholder="Ex: 175"
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
                    placeholder="Ex: 75.0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="genero">Gênero</Label>
                  <Select value={userData.genero} onValueChange={(value) => setUserData({...userData, genero: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu gênero" />
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
              
              {imc > 0 && (
                <div className="mt-6 p-4 bg-white rounded-lg border">
                  <h4 className="font-semibold mb-2">Seu IMC</h4>
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-vita-blue-600">{imc}</div>
                    <div className={`font-medium ${getIMCStatus().color}`}>
                      {getIMCStatus().status}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Experiência e Preferências</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tempoTreino">Há quanto tempo treina?</Label>
                  <Select value={userData.tempoTreino} onValueChange={(value) => setUserData({...userData, tempoTreino: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua experiência" />
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

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="aceita-alunos"
                    checked={userData.aceitaAlunosFormacao}
                    onCheckedChange={(checked) => setUserData({...userData, aceitaAlunosFormacao: checked as boolean})}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label 
                      htmlFor="aceita-alunos"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Aceito receber informações de alunos em formação
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Você receberá conteúdo educativo validado por professores, criado por estudantes das áreas de saúde.
                    </p>
                  </div>
                </div>

                {imc > 0 && (
                  <div className="mt-6 p-4 bg-vita-blue-50 rounded-lg border border-vita-blue-200">
                    <h4 className="font-semibold mb-2 text-vita-blue-800">Resumo do seu perfil</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>IMC: <span className="font-medium">{imc}</span></div>
                      <div>Status: <span className={`font-medium ${getIMCStatus().color}`}>{getIMCStatus().status}</span></div>
                      <div>Experiência: <span className="font-medium">{userData.tempoTreino}</span></div>
                      <div>Meta: <span className="font-medium">{userData.pesoDesejado}kg</span></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <Button 
              variant="outline" 
              onClick={handlePrev}
              disabled={step === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </Button>
            
            {step < 3 ? (
              <Button 
                onClick={handleNext}
                className="bg-vita-blue-600 hover:bg-vita-blue-700 flex items-center gap-2"
              >
                Próximo
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit}
                className="bg-vita-blue-600 hover:bg-vita-blue-700"
              >
                Finalizar Cadastro
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
