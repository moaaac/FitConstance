
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Heart, User, GraduationCap, ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { toast } = useToast();

  const handleLogin = (userType: string) => {
    // Simulação de login - aqui será integrado com Supabase
    toast({
      title: "Login realizado com sucesso!",
      description: `Bem-vindo como ${userType}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">VitaMulti</CardTitle>
          <CardDescription>Saúde e Bem-estar Multidisciplinar</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="usuario" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="usuario" className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Usuário
              </TabsTrigger>
              <TabsTrigger value="aluno" className="flex items-center gap-1">
                <GraduationCap className="w-4 h-4" />
                Aluno
              </TabsTrigger>
              <TabsTrigger value="professor" className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                Professor
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="usuario" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-usuario">Email</Label>
                <Input 
                  id="email-usuario" 
                  type="email" 
                  placeholder="seu@email.com"
                  value={credentials.email}
                  onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-usuario">Senha</Label>
                <Input 
                  id="password-usuario" 
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                />
              </div>
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700" 
                onClick={() => handleLogin('usuário')}
              >
                Entrar como Usuário
              </Button>
            </TabsContent>
            
            <TabsContent value="aluno" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-aluno">Email Acadêmico</Label>
                <Input 
                  id="email-aluno" 
                  type="email" 
                  placeholder="aluno@universidade.edu.br"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-aluno">Senha</Label>
                <Input 
                  id="password-aluno" 
                  type="password"
                />
              </div>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700" 
                onClick={() => handleLogin('aluno')}
              >
                Entrar como Aluno
              </Button>
            </TabsContent>
            
            <TabsContent value="professor" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-professor">Email Institucional</Label>
                <Input 
                  id="email-professor" 
                  type="email" 
                  placeholder="professor@instituicao.edu.br"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-professor">Senha</Label>
                <Input 
                  id="password-professor" 
                  type="password"
                />
              </div>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700" 
                onClick={() => handleLogin('professor')}
              >
                Entrar como Professor
              </Button>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">Não tem uma conta?</p>
            <Button variant="outline" className="w-full">
              Criar Conta
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
